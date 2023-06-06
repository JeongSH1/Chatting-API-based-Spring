package com.demo.springreact.security;

import com.demo.springreact.token.TokenProvider;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.util.StreamUtils;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.Enumeration;
import java.util.Map;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends GenericFilter {

    private TokenProvider tokenProvider;

    public void doFilter (ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
            throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        ServletInputStream inputStream = httpServletRequest.getInputStream();
        System.out.println(StreamUtils.copyToString(inputStream, StandardCharsets.UTF_8));
        System.out.println(httpServletRequest.getParameter("accessToken"));
        filterChain.doFilter(servletRequest, servletResponse);
    }

    //서블릿 데이터 읽어오기
    //토큰 검증
}
