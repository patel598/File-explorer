export const explorer = {
    id: '1',
    name: 'root',
    isFolder: true,
    item: [
        {
            id: '2',
            name: 'folder',
            isFolder: true,
            item: [
                {
                    id: '4',
                    name: 'file 1',
                    isFolder: false,
                    item: [],
                },
                {
                    id: '5',
                    name: 'file 2',
                    isFolder: false,
                    item: [],
                },
                {
                    id: '6',
                    name: 'file 3',
                    isFolder: true,
                    item: [],
                },

            ],
        },
        {
            id: '3',
            name: 'file',
            isFolder: false,
            item: [],
        },
    ]
}