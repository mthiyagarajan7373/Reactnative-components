interface ResponseAuth {
    status: string;
    mobileId: string;
}
export interface AuthState {
    responseAuth: ResponseAuth | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
interface TechnicalInfo {
    screenSize: string;
    deviceType: string;
    deviceOs: string;
    deviceUuid: string;
    iosAdvertisingId: string;
    androidAdvertisingId: string;
}
interface AuthResponseRequest {
    appkey: string;
    mid?: string;
    pushNotificationToken?: string;
    technicalInfo: TechnicalInfo;
    additionalData: any;
}
export declare const authRequest: import("@reduxjs/toolkit").AsyncThunk<ResponseAuth, AuthResponseRequest, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const authResponse: ((state: {
    auth: AuthState;
}) => ResponseAuth | null) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: AuthState) => ResponseAuth | null;
    memoizedResultFunc: ((resultFuncArgs_0: AuthState) => ResponseAuth | null) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => ResponseAuth | null;
    dependencies: [(state: {
        auth: AuthState;
    }) => AuthState];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
    memoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
};
export declare const authStatus: ((state: {
    auth: AuthState;
}) => "succeeded" | "failed" | "loading" | "idle") & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: AuthState) => "succeeded" | "failed" | "loading" | "idle";
    memoizedResultFunc: ((resultFuncArgs_0: AuthState) => "succeeded" | "failed" | "loading" | "idle") & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => "succeeded" | "failed" | "loading" | "idle";
    dependencies: [(state: {
        auth: AuthState;
    }) => AuthState];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
    memoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
};
export declare const authError: ((state: {
    auth: AuthState;
}) => string | null) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: AuthState) => string | null;
    memoizedResultFunc: ((resultFuncArgs_0: AuthState) => string | null) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => string | null;
    dependencies: [(state: {
        auth: AuthState;
    }) => AuthState];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
    memoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
};
declare const _default: import("redux").Reducer<AuthState>;
export default _default;
//# sourceMappingURL=AuthRedux.d.ts.map