import * as pulumi from "@pulumi/pulumi";
/**
 * The provider type for the terraform-provider-doppler package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export declare class Provider extends pulumi.ProviderResource {
    /**
     * Returns true if the given object is an instance of Provider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Provider;
    /**
     * A Doppler token, either a personal or service token
     */
    readonly dopplerToken: pulumi.Output<string>;
    /**
     * The Doppler API host (i.e. https://api.doppler.com)
     */
    readonly host: pulumi.Output<string | undefined>;
    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProviderArgs, opts?: pulumi.ResourceOptions);
}
/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * A Doppler token, either a personal or service token
     */
    dopplerToken: pulumi.Input<string>;
    /**
     * The Doppler API host (i.e. https://api.doppler.com)
     */
    host?: pulumi.Input<string>;
    /**
     * Whether or not to verify TLS
     */
    verifyTls?: pulumi.Input<boolean>;
}
