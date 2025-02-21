import { ZRSelectOptions } from "@/types/elements/select.type";
import { ZRUSelectValueI } from "@/types/radixUI/index.type";
import { expenseFieldsEnum } from "@/utils/enums/formData";
import { FormFieldType } from "@/utils/enums/index.enum";
import { GroupBase, OptionsOrGroups } from "react-select";

export const expenseFormFields = {
    [expenseFieldsEnum.prize]: {
        type: FormFieldType.prize,
    },
    [expenseFieldsEnum.date]: {
        type: FormFieldType.date,
    },
    [expenseFieldsEnum.description]: {
        type: FormFieldType.description,
    }
} as const;
