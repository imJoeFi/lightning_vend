import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {SelectionMenu} from './selectionMenu';

it('renders empty inventory', () => {
  const tree = renderer.create(
    <SelectionMenu
      size={330}
      canShowInvoice={true}
      inventory={[]}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders inventory with 1 item', () => {
  const tree = renderer.create(
    <SelectionMenu
      size={330}
      canShowInvoice={true}
      inventory={[
        {
          displayName: 'Test Item 1',
          priceSats: 1234,
          executionCommand: 'action1'
        }
      ]}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders inventory with 2 items', () => {
  const tree = renderer.create(
    <SelectionMenu
      size={330}
      canShowInvoice={true}
      inventory={[
        {
          displayName: 'Test Item 1',
          priceSats: 1000,
          executionCommand: 'action1'
        },
        {
          displayName: 'Test Item 2',
          priceSats: 2000,
          executionCommand: 'action2'
        }
      ]}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders inventory with 3 items', () => {
  const tree = renderer.create(
    <SelectionMenu
      size={330}
      canShowInvoice={true}
      inventory={[
        {
          displayName: 'Test Item 1',
          priceSats: 1000,
          executionCommand: 'action1'
        },
        {
          displayName: 'Test Item 2',
          priceSats: 2000,
          executionCommand: 'action2'
        },
        {
          displayName: 'Test Item 3',
          priceSats: 3000,
          executionCommand: 'action3'
        }
      ]}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders inventory with 4 items', () => {
  const tree = renderer.create(
    <SelectionMenu
      size={330}
      canShowInvoice={true}
      inventory={[
        {
          displayName: 'Test Item 1',
          priceSats: 1000,
          executionCommand: 'action1'
        },
        {
          displayName: 'Test Item 2',
          priceSats: 2000,
          executionCommand: 'action2'
        },
        {
          displayName: 'Test Item 3',
          priceSats: 3000,
          executionCommand: 'action3'
        },
        {
          displayName: 'Test Item 4',
          priceSats: 4000,
          executionCommand: 'action4'
        }
      ]}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders inventory with 5 items', () => {
  const tree = renderer.create(
    <SelectionMenu
      size={330}
      canShowInvoice={true}
      inventory={[
        {
          displayName: 'Test Item 1',
          priceSats: 1000,
          executionCommand: 'action1'
        },
        {
          displayName: 'Test Item 2',
          priceSats: 2000,
          executionCommand: 'action2'
        },
        {
          displayName: 'Test Item 3',
          priceSats: 3000,
          executionCommand: 'action3'
        },
        {
          displayName: 'Test Item 4',
          priceSats: 4000,
          executionCommand: 'action4'
        },
        {
          displayName: 'Test Item 5',
          priceSats: 5000,
          executionCommand: 'action5'
        }
      ]}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});