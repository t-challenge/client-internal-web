package ru.tchallenge.client.internal.web.view;

public final class ClientConfiguration {

    private final String baseUrl;
    private final String clientUrl;
    private final String serviceKernelUrl;
    private final String clientVersion;
    private final String title;

    public ClientConfiguration(final String baseUrl,
                               final String clientUrl,
                               final String serviceKernelUrl,
                               final String clientVersion,
                               final String title) {
        this.baseUrl = baseUrl;
        this.clientUrl = clientUrl;
        this.serviceKernelUrl = serviceKernelUrl;
        this.clientVersion = clientVersion;
        this.title = title;
    }

    public String getBaseUrl() {
        return baseUrl;
    }

    public String getClientUrl() {
        return clientUrl;
    }

    public String getServiceKernelUrl() {
        return serviceKernelUrl;
    }

    public String getClientVersion() {
        return clientVersion;
    }

    public String getTitle() {
        return title;
    }
}
