/// <reference path="../../built/ambient.d.ts" />
import {ProtractorExpectedConditions} from 'protractor';
let ExpectedConditions: ProtractorExpectedConditions;
ExpectedConditions.not(0);
ExpectedConditions.not('1');
ExpectedConditions.not(true);
ExpectedConditions.and(0);
ExpectedConditions.and('1');
ExpectedConditions.and(true);
ExpectedConditions.or(0, () => {});
ExpectedConditions.or('1', () => {});
ExpectedConditions.or(true, () => {});
ExpectedConditions.or(() => {}, 0);
ExpectedConditions.or(() => {}, '1');
ExpectedConditions.or(() => {}, true);
ExpectedConditions.or(0, '1');
ExpectedConditions.alertIsPresent(0);
ExpectedConditions.alertIsPresent('1');
ExpectedConditions.alertIsPresent(true);
ExpectedConditions.alertIsPresent(() => {});
ExpectedConditions.elementToBeClickable(0);
ExpectedConditions.elementToBeClickable('1');
ExpectedConditions.elementToBeClickable();
ExpectedConditions.elementToBeClickable(true);
ExpectedConditions.elementToBeClickable(() => {});