import * as pulumi from "@pulumi/pulumi";
export declare class Secret extends pulumi.CustomResource {
    /**
     * Get an existing Secret resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecretState, opts?: pulumi.CustomResourceOptions): Secret;
    /**
     * Returns true if the given object is an instance of Secret.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Secret;
    /**
     * The computed secret value, after resolving secret references
     */
    readonly computed: pulumi.Output<string>;
    /**
     * The name of the Doppler config
     */
    readonly config: pulumi.Output<string>;
    /**
     * The name of the Doppler secret
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Doppler project
     */
    readonly project: pulumi.Output<string>;
    /**
     * The raw secret value
     */
    readonly value: pulumi.Output<string>;
    /**
     * Create a Secret resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecretArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Secret resources.
 */
export interface SecretState {
    /**
     * The computed secret value, after resolving secret references
     */
    computed?: pulumi.Input<string>;
    /**
     * The name of the Doppler config
     */
    config?: pulumi.Input<string>;
    /**
     * The name of the Doppler secret
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Doppler project
     */
    project?: pulumi.Input<string>;
    /**
     * The raw secret value
     */
    value?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Secret resource.
 */
export interface SecretArgs {
    /**
     * The name of the Doppler config
     */
    config: pulumi.Input<string>;
    /**
     * The name of the Doppler secret
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Doppler project
     */
    project: pulumi.Input<string>;
    /**
     * The raw secret value
     */
    value: pulumi.Input<string>;
}
