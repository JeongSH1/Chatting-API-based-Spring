package com.demo.springreact;

import org.apache.tomcat.util.codec.binary.Base64;
import org.junit.jupiter.api.Test;

import java.security.InvalidAlgorithmParameterException;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.spec.ECGenParameterSpec;

public class CreateKey {

    @Test
    public void test_pure_java_generateKeyPair() throws NoSuchAlgorithmException, InvalidAlgorithmParameterException {
        // Given
        final KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("EC");
        keyPairGenerator.initialize(new ECGenParameterSpec("secp256r1")); // == P256

        // When
        final KeyPair keyPair = keyPairGenerator.generateKeyPair();

        // Then
        // Nothing Happen
        System.out.println("ecKey.publicKey: " + Base64.encodeBase64String(keyPair.getPublic().getEncoded()));
        System.out.println("ecKey.privateKey: " + Base64.encodeBase64String(keyPair.getPrivate().getEncoded()));
    }
}
