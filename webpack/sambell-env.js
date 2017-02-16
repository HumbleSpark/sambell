const IS_SERVER = typeof window === "undefined";
const CLIENT_MESSAGE = "ONLY AVAILABLE ON SERVER.";
export const CLIENT_ENTRY = IS_SERVER ? '{{SAMBELL_CLIENT_ENTRY}}' : CLIENT_MESSAGE; // happens post build
export const CLIENT_OUTPUT_DIR = IS_SERVER ? SAMBELL_CLIENT_OUTPUT_DIR : CLIENT_MESSAGE;
export const WEBPACK_PUBLIC_PATH = IS_SERVER ? SAMBELL_PUBLIC_PATH : CLIENT_MESSAGE;
