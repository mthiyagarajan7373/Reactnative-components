export interface ContentDeliveryState {
    responseContentDelivery: any[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
interface ContentDeliveryReq {
    appkey: string;
    mid: string;
}
export declare const contentDeliveryReq: import("@reduxjs/toolkit").AsyncThunk<any, ContentDeliveryReq, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const contentDeliveryResponse: ((state: {
    contentDelivery: ContentDeliveryState;
}) => any[]) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: ContentDeliveryState) => any[];
    memoizedResultFunc: ((resultFuncArgs_0: ContentDeliveryState) => any[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => any[];
    dependencies: [(state: {
        contentDelivery: ContentDeliveryState;
    }) => ContentDeliveryState];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
    memoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
};
export declare const contentDeliveryStatus: ((state: {
    contentDelivery: ContentDeliveryState;
}) => "succeeded" | "failed" | "loading" | "idle") & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: ContentDeliveryState) => "succeeded" | "failed" | "loading" | "idle";
    memoizedResultFunc: ((resultFuncArgs_0: ContentDeliveryState) => "succeeded" | "failed" | "loading" | "idle") & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => "succeeded" | "failed" | "loading" | "idle";
    dependencies: [(state: {
        contentDelivery: ContentDeliveryState;
    }) => ContentDeliveryState];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
    memoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
};
export declare const contentDeliveryError: ((state: {
    contentDelivery: ContentDeliveryState;
}) => string | null) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: ContentDeliveryState) => string | null;
    memoizedResultFunc: ((resultFuncArgs_0: ContentDeliveryState) => string | null) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => string | null;
    dependencies: [(state: {
        contentDelivery: ContentDeliveryState;
    }) => ContentDeliveryState];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
    memoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
};
declare const _default: import("redux").Reducer<ContentDeliveryState>;
export default _default;
//# sourceMappingURL=ContentDeliveryRedux.d.ts.map