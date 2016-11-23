/*
 * @Author: huangchengdu
 * @Date:   2016-11-23 21:38:24
 * @Last Modified by:   huangchengdu
 * @Last Modified time: 2016-11-23 21:48:16
 */
export default {
    methods: {
        distinct(arr) {
            var obj = {},
                i = 0,
                len = 0;
            if (Array.isArray(arr) && arr.length > 0) {
                len = arr.length;
                for (i = 0; i < len; i += 1) {
                    obj[arr[i]] = arr[i];
                }
                return Object.keys(obj);
            }
            return [];
        }
    }
}
