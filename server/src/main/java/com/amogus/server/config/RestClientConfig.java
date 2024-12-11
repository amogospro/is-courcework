package com.amogus.server.config;

import org.apache.logging.log4j.util.Base64Util;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.http.converter.ByteArrayHttpMessageConverter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpHeaders;

import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Configuration
public class RestClientConfig {

    @Bean
    public RestTemplate restTemplate() {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getInterceptors().add(new ClientHttpRequestInterceptor() {
            @Override
            public ClientHttpResponse intercept(HttpRequest request, byte[] body, ClientHttpRequestExecution execution) throws IOException {
                HttpHeaders headers = request.getHeaders();
                headers.add(HttpHeaders.AUTHORIZATION, encodeCredentialsForBasicAuth("orthanc", "orthanc"));
                return execution.execute(request, body);
            }

            private String encodeCredentialsForBasicAuth(String username, String password) {
                String auth = username + ":" + password;
                String encodedAuth = Base64Util.encode(auth);
                return "Basic " + encodedAuth;
            }
        });

        List<HttpMessageConverter<?>> messageConverters = new ArrayList<>();
        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
        converter.setSupportedMediaTypes(Arrays.asList(MediaType.APPLICATION_JSON, new MediaType("application", "json", StandardCharsets.UTF_8)));
        messageConverters.add(converter);
        restTemplate.setMessageConverters(messageConverters);


        ByteArrayHttpMessageConverter byteArrayConverter = new ByteArrayHttpMessageConverter();
        List<MediaType> supportedMediaTypes = new ArrayList<>();
        supportedMediaTypes.add(MediaType.APPLICATION_OCTET_STREAM);
        supportedMediaTypes.add(MediaType.valueOf("application/zip"));
        supportedMediaTypes.add(MediaType.valueOf("application/dicom"));
        byteArrayConverter.setSupportedMediaTypes(supportedMediaTypes);

        // Add the configured converter to the RestTemplate
        restTemplate.getMessageConverters().add(byteArrayConverter);

        return restTemplate;
    }
}