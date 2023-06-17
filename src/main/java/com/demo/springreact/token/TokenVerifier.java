package com.demo.springreact.token;

import com.demo.springreact.exception.CustomException;
import com.demo.springreact.error.ErrorCode;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;

@Slf4j
@Component
public class TokenVerifier {

    private final Key key;

    public TokenVerifier(@Value("${jwt.secret}") String secretKey) {
        byte[] keyBytes = Decoders.BASE64URL.decode(secretKey);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    public boolean verifyToken(Token token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token.getAccessToken());
            return true;
        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
            throw new CustomException(ErrorCode.INVALID_SIGNATURE);
        } catch (ExpiredJwtException e) {
            throw new CustomException(ErrorCode.REFRESH_TOKEN_HAS_EXPIRED);
        } catch (UnsupportedJwtException e) {
            throw new CustomException(ErrorCode.UNSUPPORTED_TOKEN);
        } catch (IllegalArgumentException e1) {
            throw new CustomException(ErrorCode.INVALID_TOKEN);
        } catch (NullPointerException e) {
            throw new CustomException(ErrorCode.NON_EXIST_TOKEN);
        }
    }



    public Claims parseClaims(Token token) {
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token.getAccessToken())
                    .getBody();
        } catch (ExpiredJwtException e) {
            throw new CustomException(ErrorCode.REFRESH_TOKEN_HAS_EXPIRED);
        }
    }
}
