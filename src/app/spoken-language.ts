export interface SpokenLanguage {
  name: string;
  proficiency: SpokenLanguageProficiency;
}

export enum SpokenLanguageProficiency {
  A1 = 1,
  A2 = 2,
  B1 = 3,
  B2 = 4,
  C1 = 5,
  C2 = 6,
  F = 7,
}

export const SpokenLanguageProficiencyLabels: Record<SpokenLanguageProficiency, string> = {
  [SpokenLanguageProficiency.A1]: 'A1',
  [SpokenLanguageProficiency.A2]: 'A2',
  [SpokenLanguageProficiency.B1]: 'B1',
  [SpokenLanguageProficiency.B2]: 'B2',
  [SpokenLanguageProficiency.C1]: 'C1',
  [SpokenLanguageProficiency.C2]: 'C2',
  [SpokenLanguageProficiency.F]: 'Mother Tongue',
};
