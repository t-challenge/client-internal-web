package ru.tchallenge.client.internal.web.utility.template;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Service;

import com.github.jknack.handlebars.Handlebars;
import com.github.jknack.handlebars.Template;
import com.github.jknack.handlebars.io.ClassPathTemplateLoader;

@Service
public class TemplateService {

    private final Handlebars handlebars = new Handlebars(new ClassPathTemplateLoader("/views/", ".hbs"));
    private final Map<String, Template> templates = new ConcurrentHashMap<>();
    private final boolean noCaching = true;

    public String render(final String view, final Object model) {
        try {
            return getTemplate(view).apply(model);
        } catch (Exception exception) {
            throw new RuntimeException(exception);
        }
    }

    private Template getTemplate(final String name) {
        if (noCaching) {
            return getCompiledTemplate(name);
        } else {
            return templates.computeIfAbsent(name, this::getCompiledTemplate);
        }
    }

    private Template getCompiledTemplate(final String name) {
        try {
            return handlebars.compile(name);
        } catch (final Exception exception) {
            throw new RuntimeException(exception);
        }
    }
}
