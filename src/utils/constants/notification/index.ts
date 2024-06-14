import constants from "@/utils/constants";

export const Notifications = [
    {
        label: 'Groups & Friends',
        value: 'groupsFriendsNotification',
        items: [
            {
                label: 'When someone adds me to a group',
                mail: true,
                inApp: true,
            },
            {
                label: 'When someone adds me as a friend',
                mail: true,
                inApp: true,
            }
        ]
    },
    {
        label: 'Expenses',
        value: 'expenses',
        items: [
            {
                label: 'When an expense is added',
                mail: true,
                inApp: false,
            },
            {
                label: 'When an expense is edited/deleted',
                mail: true,
                inApp: false,
            },
            {
                label: 'When someone comments on an expense',
                mail: true,
                inApp: false,
            },
            {
                label: 'When an expense is due',
                mail: true,
                inApp: false,
            },
            {
                label: 'When someone pays me',
                mail: true,
                inApp: false,
            }
        ]
    },
    {
        label: 'News & Updates',
        value: 'newUpdates',
        items: [
            {
                label: 'Monthly summary of my activity',
                mail: true,
                inApp: false,
            },
            {
                label: `Major ${constants.productInfo.name} news and updates`,
                mail: true,
                inApp: false,
            }
        ]
    }
];
