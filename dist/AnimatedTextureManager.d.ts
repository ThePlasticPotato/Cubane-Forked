import * as THREE from "three";
import { AssetLoader } from "./AssetLoader";
import { TextureAnimationMetadata } from "./types";
/**
 * Animation metadata structure that matches Minecraft's mcmeta format
 */
/**
 * Extended class to handle animated textures
 */
export declare class AnimatedTextureManager {
    private assetLoader;
    private animatedTextures;
    constructor(assetLoader: AssetLoader);
    /**
     * Check if a texture has animation metadata
     */
    isAnimated(texturePath: string): Promise<boolean>;
    /**
     * Load animation metadata for a texture
     */
    loadAnimationMetadata(texturePath: string): Promise<TextureAnimationMetadata | null>;
    /**
     * Create an animated texture
     */
    createAnimatedTexture(texturePath: string): Promise<THREE.Texture | null>;
    /**
     * Update all animated textures
     * Call this in your render loop
     */
    update(): void;
}
//# sourceMappingURL=AnimatedTextureManager.d.ts.map