package ru.tchallenge.client.internal.web;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import ru.tchallenge.client.internal.web.utility.RequestForwardFilter;

@Configuration
@EnableWebMvc
public class WebConfiguration extends WebMvcConfigurerAdapter {

    @Bean
    public FilterRegistrationBean corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("OPTIONS");
        config.addAllowedMethod("HEAD");
        config.addAllowedMethod("GET");
        config.addAllowedMethod("PUT");
        config.addAllowedMethod("POST");
        config.addAllowedMethod("DELETE");
        config.addAllowedMethod("PATCH");
        source.registerCorsConfiguration("/**", config);
        final FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
        bean.setOrder(0);
        return bean;
    }

    @Override
    public void configurePathMatch(PathMatchConfigurer configurer) {
        configurer.setUseSuffixPatternMatch(false);
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
                .addResourceHandler("/static/**")
                .addResourceLocations("classpath:/static/")
                .setCacheControl(CacheControl.noCache());
    }

    @Bean
    @Qualifier("faviconForwardFilter")
    public RequestForwardFilter faviconForwardFilter() {
        return new RequestForwardFilter("/static/images/favicon.ico", null, null);
    }

    @Bean
    @Qualifier("indexPageForwardFilter")
    public RequestForwardFilter indexPageForwardFilter() {
        final Set<String> exclusions = new HashSet<>();
        exclusions.add("/");
        exclusions.add("/favicon.ico");
        final Set<String> exclusionPrefixes = new HashSet<>();
        exclusionPrefixes.add("/static");
        return new RequestForwardFilter("/", exclusions, exclusionPrefixes);
    }

    @Bean
    @Qualifier("faviconForwardFilterRegistration")
    public FilterRegistrationBean faviconForwardFilterRegistration(final @Qualifier("faviconForwardFilter") RequestForwardFilter filter) {
        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.setFilter(filter);
        registration.addUrlPatterns("/favicon.ico");
        registration.setName("faviconForwardFilter");
        registration.setOrder(1);
        return registration;
    }

    @Bean
    @Qualifier("indexPageForwardFilterRegistration")
    public FilterRegistrationBean indexPageForwardFilterRegistration(final @Qualifier("indexPageForwardFilter") RequestForwardFilter filter) {
        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.setFilter(filter);
        registration.addUrlPatterns("/*");
        registration.setName("indexPageForwardFilter");
        registration.setOrder(2);
        return registration;
    }
}
