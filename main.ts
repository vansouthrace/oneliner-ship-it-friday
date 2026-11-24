import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "fix: ship it Friday, the tests passed and my confidence has never once been punished for this exact decision";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
