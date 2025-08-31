export interface Race{
    key: string;
    name: string;
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
    custom: boolean;
    note: string;
    addSingleBonus: boolean;
}

export const Races: Race[] = [
    { key: 'human',            name: 'Human',                     str:  0, dex:  0, con:  0, int:  0, wis:  0, cha:  0, custom: false, addSingleBonus: true,  note: 'Add +2 to any one ability score' },
    { key: 'dwarf',            name: 'Dwarf',                     str:  0, dex:  0, con:  2, int:  0, wis:  2, cha: -2, custom: false, addSingleBonus: false, note: '' },
    { key: 'elf',              name: 'Elf',                       str:  0, dex:  2, con: -2, int:  2, wis:  0, cha:  0, custom: false, addSingleBonus: false, note: '' },
    { key: 'gnome',            name: 'Gnome',                     str: -2, dex:  0, con:  2, int:  0, wis:  0, cha:  2, custom: false, addSingleBonus: false, note: '' },
    { key: 'halfelf',          name: 'Half-Elf',                  str:  0, dex:  0, con:  0, int:  0, wis:  0, cha:  0, custom: false, addSingleBonus: true,  note: 'Add +2 to any one ability score' },
    { key: 'halforc',          name: 'Half-Orc',                  str:  0, dex:  0, con:  0, int:  0, wis:  0, cha:  0, custom: false, addSingleBonus: true,  note: 'Add +2 to any one ability score' },
    { key: 'halfling',         name: 'Halfling',                  str: -2, dex:  2, con:  0, int:  0, wis:  0, cha:  2, custom: false, addSingleBonus: false, note: '' },
    { key: 'aasimar',          name: 'Aasimar',                   str:  0, dex:  0, con:  0, int:  0, wis:  2, cha:  2, custom: false, addSingleBonus: false, note: '' },
    { key: 'dhampir',          name: 'Dhampir',                   str:  0, dex:  2, con: -2, int:  0, wis:  0, cha:  2, custom: false, addSingleBonus: false, note: '' },
    { key: 'goblin',           name: 'Goblin',                    str: -2, dex:  4, con:  0, int:  0, wis:  0, cha: -2, custom: false, addSingleBonus: false, note: '' },
    { key: 'ifrit',            name: 'Ifrit',                     str:  0, dex:  2, con:  0, int:  0, wis: -2, cha:  2, custom: false, addSingleBonus: false, note: '' },
    { key: 'ifritmagma',       name: 'Ifrit (Magma)',             str:  0, dex: -2, con:  2, int:  2, wis:  0, cha:  0, custom: false, addSingleBonus: false, note: '' },
    { key: 'ifritsolar',       name: 'Ifrit (Solar)',             str:  2, dex:  0, con:  0, int:  0, wis: -2, cha:  2, custom: false, addSingleBonus: false, note: '' },
    { key: 'kistune',          name: 'Kistune',                   str: -2, dex:  2, con:  0, int:  0, wis:  0, cha:  2, custom: false, addSingleBonus: false, note: '' },
    { key: 'kobold',           name: 'Kobold',                    str: -4, dex:  2, con: -2, int:  0, wis:  0, cha:  0, custom: false, addSingleBonus: false, note: '' },
    { key: 'nagaji',           name: 'Nagaji',                    str:  2, dex:  0, con:  0, int: -2, wis:  0, cha:  2, custom: false, addSingleBonus: false, note: '' },
    { key: 'oread',            name: 'Oread',                     str:  2, dex:  0, con:  0, int:  0, wis:  2, cha: -2, custom: false, addSingleBonus: false, note: '' },
    { key: 'oreadcrystal',     name: 'Oread (Crystal)',           str:  2, dex:  0, con:  0, int:  0, wis: -2, cha:  2, custom: false, addSingleBonus: false, note: '' },
    { key: 'oreadmetal',       name: 'Oread (Metal)',             str:  0, dex: -2, con:  2, int:  0, wis:  2, cha:  0, custom: false, addSingleBonus: false, note: '' },
    { key: 'sylph',            name: 'Sylph',                     str:  0, dex:  2, con: -2, int:  2, wis:  0, cha:  0, custom: false, addSingleBonus: false, note: '' },
    { key: 'sylphfume',        name: 'Sylph (Fume)',              str:  0, dex:  2, con: -2, int:  0, wis:  0, cha:  2, custom: false, addSingleBonus: false, note: '' },
    { key: 'sylphlightning',   name: 'Sylph (Lightning)',         str:  0, dex:  2, con:  0, int:  0, wis: -2, cha:  2, custom: false, addSingleBonus: false, note: '' },
    { key: 'tengu',            name: 'Tengu',                     str:  0, dex:  2, con: -2, int:  0, wis:  2, cha:  0, custom: false, addSingleBonus: false, note: '' },
    { key: 'tiefling',         name: 'Tiefling',                  str:  0, dex:  2, con:  0, int:  2, wis:  0, cha: -2, custom: false, addSingleBonus: false, note: '' },
    { key: 'tieflingasura',    name: 'Tiefling (Asura-Spawn)',    str:  0, dex:  2, con:  0, int: -2, wis:  2, cha:  0, custom: false, addSingleBonus: false, note: '' },
    { key: 'tieflingdaemon',   name: 'Tiefling (Daemon-Spawn)',   str:  0, dex:  2, con:  0, int:  2, wis: -2, cha:  0, custom: false, addSingleBonus: false, note: '' },
    { key: 'tieflingdemodand', name: 'Tiefling (Demodand-Spawn)', str:  0, dex:  0, con:  2, int: -2, wis:  2, cha:  0, custom: false, addSingleBonus: false, note: '' },
    { key: 'tieflingdemon',    name: 'Tiefling (Demon-Spawn)',    str:  2, dex:  0, con:  0, int: -2, wis:  0, cha:  2, custom: false, addSingleBonus: false, note: '' },
    { key: 'tieflingdevil',    name: 'Tiefling (Devil-Spawn)',    str:  0, dex:  0, con:  2, int:  0, wis:  2, cha: -2, custom: false, addSingleBonus: false, note: '' },
    { key: 'tieflingdiv',      name: 'Tiefling (Div-Spawn)',      str:  0, dex:  2, con:  0, int: -2, wis:  0, cha:  2, custom: false, addSingleBonus: false, note: '' },
    { key: 'tieflingkyton',    name: 'Tiefling (Kyton-Spawn)',    str:  0, dex:  0, con:  2, int:  0, wis: -2, cha:  2, custom: false, addSingleBonus: false, note: '' },
    { key: 'tieflingoni',      name: 'Tiefling (Oni-Spawn)',      str:  2, dex:  0, con:  0, int:  0, wis:  2, cha: -2, custom: false, addSingleBonus: false, note: '' },
    { key: 'tieflingqlippoth', name: 'Tiefling (Qlippoth-Spawn)', str:  2, dex:  0, con:  0, int: -2, wis:  2, cha:  0, custom: false, addSingleBonus: false, note: '' },
    { key: 'tieflingrakshasa', name: 'Tiefling (Rakshasa-Spawn)', str:  0, dex:  2, con:  0, int:  0, wis: -2, cha:  2, custom: false, addSingleBonus: false, note: '' },
    { key: 'undine',           name: 'Undine',                    str: -2, dex:  2, con:  0, int:  0, wis:  2, cha:  0, custom: false, addSingleBonus: false, note: '' },
    { key: 'undinefrost',      name: 'Undine (Frost)',            str:  0, dex:  2, con:  0, int:  2, wis:  0, cha: -2, custom: false, addSingleBonus: false, note: '' },
    { key: 'undinevapor',      name: 'Undine (Vapor)',            str:  0, dex:  0, con:  2, int: -2, wis:  2, cha:  0, custom: false, addSingleBonus: false, note: '' },
    { key: 'wayang',           name: 'Wayang',                    str:  0, dex:  2, con:  0, int:  2, wis: -2, cha:  0, custom: false, addSingleBonus: false, note: '' },
    { key: 'custom',           name: 'Custom',                    str:  0, dex:  0, con:  0, int:  0, wis:  0, cha:  0, custom: true,  addSingleBonus: false, note: 'Choose your own modifiers' },
];