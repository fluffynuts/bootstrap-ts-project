export interface Feedback {
    run<T>(label: string, action: AsyncFunc<T>): Promise<T>;
    log(text: string): void;
    warn(text: string): void;
}

export interface Dictionary<T> {
    [key: string]: T;
}

export interface BootstrapOptions {
    name: string;
    where?: string;
    includeLinter?: boolean;
    includeNodeTypes?: boolean;
    includeFaker?: boolean;
    includeJest?: boolean;
    includeExpectEvenMoreJest?: boolean;
    includeZarro?: boolean;
    initializeGit?: boolean;
    setupTestScript?: boolean;
    setupBuildScript?: boolean;
    setupReleaseScripts?: boolean;
    isCommandline?: boolean;
    addStartScript?: boolean;
    includeYargs?: boolean;
    skipReadme?: boolean;
    license?: string;
    authorName?: string;
    authorEmail?: string;

    feedback?: Feedback;
    // should only be useful from testing
    skipTsConfig?: boolean;
}

export type AsyncFunc<T> = (() => Promise<T>);
export type AsyncAction = (() => Promise<void>);
export type Func<Tin, TOut> = ((arg: Tin) => TOut);
