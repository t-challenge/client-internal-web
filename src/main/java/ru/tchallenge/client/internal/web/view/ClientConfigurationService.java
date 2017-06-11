package ru.tchallenge.client.internal.web.view;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class ClientConfigurationService {

    @Value("${tchallenge.client.internal.url}")
    private String preconfiguredClientUrl;

    @Value("${tchallenge.client.internal.service-kernel-url}")
    private String serviceKernelUrl;

    public Object getConfiguration(final HttpServletRequest request) {
        final String clientUrl = preconfiguredClientUrl != null ? preconfiguredClientUrl : getRequestBaseUrl(request);
        final String baseUrl = clientUrl.endsWith("/") ? clientUrl : clientUrl + "/";
        final String clientVersion = getClientVersion();
        return new ClientConfiguration(baseUrl, clientUrl, serviceKernelUrl, clientVersion, "T-Challenge");
    }

    private String getClientVersion() {
        return "1.0.0-SNAPSHOT";
    }

    private String getRequestBaseUrl(final HttpServletRequest request) {
        return request.getContextPath() + "/";
    }
}
