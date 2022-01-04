"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSecretsOutput = exports.getSecrets = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSecrets(args, opts) {
    args = args || {};
    if (!opts) {
        opts = {};
    }
    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("doppler:index/getSecrets:getSecrets", {
        "config": args.config,
        "project": args.project,
    }, opts);
}
exports.getSecrets = getSecrets;
function getSecretsOutput(args, opts) {
    return pulumi.output(args).apply(a => getSecrets(a, opts));
}
exports.getSecretsOutput = getSecretsOutput;
//# sourceMappingURL=getSecrets.js.map