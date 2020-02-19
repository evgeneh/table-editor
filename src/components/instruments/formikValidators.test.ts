import {emailValidate} from './formikValidators'

test('email must be valid', () => {

    const emailResult = emailValidate("t-est+gs.dfsdggr@maifl.sru")
    expect(emailResult).toBe(undefined);
});