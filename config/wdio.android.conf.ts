import { join } from 'path';
import {config} from './wdio.appium.local.conf.ts';

// ============
// Specs
// ============
config.specs = [
    '../test/specs/*.ts',
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        'appium:avd': 'Pixel_3a_API_34_extension_level_7_x86_64',
        'appium:platformVersion': '14.0',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        // The path to the app
        'appium:app': join(process.cwd(), './apps/android.wdio.native.app.v1.0.8.apk'),
        // @ts-ignore
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        'appium:noReset': false,
        'appium:fullReset': true,
        'appium:newCommandTimeout': 240,
    },
];

exports.config= config;