import { useState } from 'react';
import { Combobox, useCombobox } from '@mantine/core';
import data from "@data/dummy/countires.json";
import Image from 'next/image';
import { useLocale } from '@/utils/getLocale';

const countries = data.countriesLocalAPI;

export function SelectDropdownSearch() {
    const { activeLocale } = useLocale();
    const [search, setSearch] = useState('');
    const combobox = useCombobox({
        onDropdownClose: () => {
          combobox.resetSelectedOption();
          combobox.focusTarget();
          setSearch('');
        },
        onDropdownOpen: () => {
          combobox.focusSearchInput();
        },
    });

    const [value, setValue] = useState(null);

    const options = countries
        .filter((item) => item.name.toLowerCase().includes(search.toLowerCase().trim()))
        .map((item) => (
            <Combobox.Option value={item.name} key={item.name}>
               <Image src={item.file_url} alt={`${item.name} flag`} width={20} height={10} />
               <span style={{ marginLeft: '10px' }}>{item.name}</span>
            </Combobox.Option>
        ));

    return (
        <Combobox
            store={combobox}
            withinPortal={false}
            onOptionSubmit={(val) => {
                setValue(val);
                combobox.closeDropdown();
            }}
        >
            <Combobox.Target>
                <input
                    type="text"
                    placeholder={activeLocale ==='ar' ? "البلد" : "COUNTRY"}
                    value={value || ''}
                    readOnly
                    onClick={() => combobox.toggleDropdown()}
                   
                />
            </Combobox.Target>

            <Combobox.Dropdown style={{ maxHeight: 200, overflowY: 'auto' }}>
                <Combobox.Search
                    value={search}
                    onChange={(event) => setSearch(event.currentTarget.value)}
                    placeholder="Search countries"
                />
                <Combobox.Options>
                    {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
}
