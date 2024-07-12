import { CommonCodeResItem } from '@_generated/tanstack';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type CommonCode = {
  id: string;
  commonCodeTypeId?: string;
  name: string;
  externalCode1?: string;
  externalCode2?: string;
  externalCode3?: string;
  displayNumber?: number;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
};

export type CommonCodeStoreProps = {
  codes: CommonCode[];
  codesById: {
    [key: string]: CommonCode;
  };
  codesByParentId: {
    [key: string]: CommonCode[];
  };
  save: (data: CommonCodeResItem[]) => void;
  getCodesByParentId: (id: string) => CommonCode[];
  getCodesById: (id: string) => CommonCode;
  getCodes: () => CommonCode[];
};

export const useCommonCodeStore = create(
  persist<CommonCodeStoreProps>(
    (set, get) => ({
      codes: [],
      codesById: {},
      codesByParentId: {},
      save(data: CommonCodeResItem[]) {
        const codesById: CommonCodeStoreProps['codesById'] = {};
        const codes = [];
        const codesByParentId: CommonCodeStoreProps['codesByParentId'] = {};
        for (const row of data) {
          if (!row.id) {
            return;
          }

          const commonCodeTypeId = row.commonCodeTypeId;

          const code: CommonCode = {
            id: row.id,
            commonCodeTypeId,
            name: row.name || '',
            externalCode1: row.externalCode1,
            externalCode2: row.externalCode2,
            externalCode3: row.externalCode3,
            displayNumber: row.displayNumber,
            status: row.status,
            createdAt: row.createdAt,
            updatedAt: row.updatedAt,
            createdBy: row.createdBy,
            updatedBy: row.updatedBy
          };

          codesById[row.id] = code;
          if (commonCodeTypeId) {
            codesByParentId[commonCodeTypeId] = codesByParentId[commonCodeTypeId] || [];
            codesByParentId[commonCodeTypeId].push(code);
          }
          codes.push(code);
        }

        set({
          codes,
          codesById,
          codesByParentId
        });
      },
      getCodesByParentId: (id: string) =>
        (get().codesByParentId[id] || []).sort(
          (a, b) => (a.displayNumber || 0) - (b.displayNumber || 0)
        ),
      getCodesById: (id: string) => get().codesById[id],
      getCodes: () => get().codes
    }),
    {
      name: 'common-codes-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage) // (optional) by default, 'localStorage' is used
    }
  )
);
