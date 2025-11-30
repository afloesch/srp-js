/// <reference types="node" />
/// <reference types="node" />
import { Buffer } from "buffer";
/**
 * Generate hex signing key used for AES encryption
 */
export declare function deriveKey(pass: string, email: string, salt: string): Promise<string>;
/**
 * Encrypt with RSA256 public key
 */
export declare function encryptRSAWithJWK(publicKeyJWK: JsonWebKey, plaintext: string): string;
export declare function decryptRSAWithJWK(privateJWK: JsonWebKey, encryptedBlob: string): string;
export declare function reEncryptRSAWithJWK(privateJWK: JsonWebKey, publicJWK: JsonWebKey, encryptedBlob: string): string;
/**
 * Encrypt data using symmetric key
 *
 * @param jwkOrKey JWK or string representing symmetric key
 * @param plaintext string of data to encrypt
 * @param additionalData any additional public data to attach
 * @returns {{iv, t, d, ad}}
 */
export declare function encryptAES(jwkOrKey: string | JsonWebKey, plaintext: string, additionalData?: string): AESMessage;
export interface AESMessage {
    iv: string;
    t: string;
    d: string;
    ad: string;
}
/**
 * Decrypt AES using a key
 */
export declare function decryptAES(jwkOrKey: string | JsonWebKey, message: AESMessage): string;
/**
 * Decrypt and re-encrypt with new keys
 */
export declare function reEncryptAES(oldJwkOrKey: string, newJwkOrKey: string, message: AESMessage): AESMessage;
/**
 * Generate a random salt in hex
 */
export declare function getRandomHex(bytes?: number): string;
/**
 * Generate a random account Id
 */
export declare function generateAccountId(): string;
/**
 * Generate a random key
 */
export declare function srpGenKey(): Promise<string>;
/**
 * Generate a random AES256 key for use with symmetric encryption
 */
export declare function generateAES256Key(): Promise<JsonWebKey>;
/**
 * Generate RSA keypair JWK with 2048 bits and exponent 0x10001
 */
export declare function generateKeyPairJWK(): Promise<{
    publicKey: JsonWebKey;
    privateKey: JsonWebKey;
} | {
    privateKey: {
        alg: string;
        kty: string;
        key_ops: string[];
        ext: boolean;
        d: string;
        dp: string;
        dq: string;
        e: string;
        n: string;
        p: string;
        q: string;
        qi: string;
    };
    publicKey: {
        alg: string;
        kty: string;
        key_ops: string[];
        e: string;
        n: string;
    };
}>;
/**
 * Encrypt data using symmetric key
 *
 * @param jwkOrKey JWK or string representing symmetric key
 * @param buff data to encrypt
 * @param additionalData any additional public data to attach
 * @returns {{iv, t, d, ad}}
 */
export declare function encryptAESBuffer(jwkOrKey: string | JsonWebKey, buff: Buffer, additionalData?: string): AESMessage;
/**
 * Decrypts AES using a key to buffer
 * @param jwkOrKey
 * @param encryptedResult
 * @returns {string}
 */
export declare function decryptAESToBuffer(jwkOrKey: string | JsonWebKey, encryptedResult: AESMessage): Buffer;
