interface BaseConfig {
    headers: {
        'Content-Type': string;
    };
}
interface ServerConfig {
    baseURL: string;
}
interface CombinedConfig extends BaseConfig, ServerConfig {
    authAPI: string;
    updateLocation: string;
    contentDelivery: string;
    reachAPI: string;
}
export declare const setServerConfig: (baseUrl: string) => CombinedConfig;
declare const config: CombinedConfig;
export default config;
//# sourceMappingURL=Config.d.ts.map