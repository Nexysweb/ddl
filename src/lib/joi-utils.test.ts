import Joi from '@hapi/joi';
import * as JoiUtil from './joi-utils';
import * as T from './type';
import {JoiOut} from './joi-type';

test('getType', () => {
  expect(JoiUtil.getType('String')).toEqual(Joi.string())
});

test('append optional', () => {
  expect(JoiUtil.appendOptional(Joi.string(), false)).toEqual(Joi.string().required())
})

test('schemaFromDd', () => {
  const dd:T.DdParams[] = [
    { arg: 'isObserved', type: 'Boolean', optional: false},
    { arg: 'name', type: 'String', optional: false},
    { arg: 'recognitionId', type: 'Int', optional: false},
    { arg: 'targetedId', type: 'Int', optional: false},
    { arg: 'historyEnd', type: 'LocalDateTime', optional: true},
    { arg: 'logDateAdded', type: 'LocalDateTime', optional: true}
  ];

  const schema:{[k:string]:JoiOut} = {
    isObserved: Joi.boolean().required(),
    name: Joi.string().required(),
    recognitionId: Joi.number().required(),
    targetedId: Joi.number().required(),
    historyEnd: Joi.date()
  };

  const optouts = ['logDateAdded'];

  expect(JoiUtil.schemaFromDd(dd, optouts)).toEqual(schema);
});

