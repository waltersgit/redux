/**
 * Created by peter on 2018/4/12.
 */
export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
};