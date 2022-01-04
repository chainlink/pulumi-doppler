import * as pulumi from "@pulumi/pulumi";
export declare function getSecrets(args?: GetSecretsArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretsResult>;
/**
 * A collection of arguments for invoking getSecrets.
 */
export interface GetSecretsArgs {
    config?: string;
    project?: string;
}
/**
 * A collection of values returned by getSecrets.
 */
export interface GetSecretsResult {
    readonly config?: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly map: {
        [key: string]: string;
    };
    readonly project?: string;
}
export declare function getSecretsOutput(args?: GetSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecretsResult>;
/**
 * A collection of arguments for invoking getSecrets.
 */
export interface GetSecretsOutputArgs {
    config?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
