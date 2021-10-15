import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      background: '#ccd2dc',
      backdropFilter: 'blur(4px)',
    },
  },
};

const asset = [
    "WBTC",
    "ETH",
    "BNB",
    "STAT",
];

function getStyles(asset: string, underlyingAsset: readonly string[], theme: Theme) {
  return {
    fontWeight:
      underlyingAsset.indexOf(asset) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
    background: "#ccd2dc",
  };
}

export default function UnderlyingSelector() {
  const theme = useTheme();
  const [underlyingAsset , setUnderlyingAsset ] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof underlyingAsset >) => {
    const {
      target: { value },
    } = event;
    setUnderlyingAsset (
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={underlyingAsset }
          onChange={handleChange}

          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Placeholder</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {asset.map((asset) => (
            <MenuItem
              key={asset}
              value={asset}
              style={getStyles(asset, underlyingAsset , theme)}
            >
              {asset}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
