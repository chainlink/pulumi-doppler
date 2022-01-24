import * as pulumi from "@pulumi/pulumi";

import * as doppler from "@pulumi/doppler";

const secret = new doppler.Secret("my-secret", {
    name: "BLAH",
    project: "test-proj",
    config: "dev",
    value: pulumi.secret("blah2345")
})
