/// <reference types="node" />

//export const BASE_URL = "https://www.saucedemo.com/";
export const USERNAME = "standard_user";
export const PASSWORD = "secret_sauce";

const ENV_URL={
    qa:"https://www.saucedemo.com/",
    dev:"https://www.saucedemo.com/",
    uat:"https://www.saucedemo.com/",
    prod:"https://www.saucedemo.com/"
};

const ENV = process.env.ENV || "qa";

export const BASE_URL = (ENV_URL as any)[ENV];

