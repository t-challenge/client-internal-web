package ru.tchallenge.client.internal.web.view;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ru.tchallenge.client.internal.web.utility.template.TemplateService;

@RestController
@RequestMapping(path = "/")
public class IndexViewController {

    @Autowired
    private ClientConfigurationService clientConfigurationService;

    @Autowired
    private TemplateService templateService;

    @RequestMapping(method = RequestMethod.GET, produces = "text/html;charset=utf-8")
    public String get(final HttpServletRequest request) {
        return templateService.render("index", clientConfigurationService.getConfiguration(request));
    }
}
