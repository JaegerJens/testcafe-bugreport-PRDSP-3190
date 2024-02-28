import { Selector } from 'testcafe';

fixture('Click submit button')
    .page('https://jaegerjens.github.io/testcafe-bugreport-PRDSP-3190/static/')

test('click submit button', async t => {
    await t.click(Selector('button[type=submit]').withExactText('Confirm'));
});
