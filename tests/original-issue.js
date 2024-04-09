import { Selector } from 'testcafe';
fixture('issue example')
.page('https://jsfiddle.net/4bgvs8q3/');

const input2 = Selector('#input2').find('input');
const input8 = Selector('#input8').find('input');
const frame = Selector('[name="result"]');

test('fill a form', async (t) => {
  await t.maximizeWindow();
  await t.switchToIframe(frame)
  await t.typeText(input2, 'test ok');
  await t.expect(input2.value).eql('test ok');
  await t.typeText(input8, 'test ko');
  await t.expect(input8.value).eql('test ko');
});
