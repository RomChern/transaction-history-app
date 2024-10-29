type TOperation = {
    title: string,
    description: string,
    icon: string,
    optionalDescription: string,
    date: string,
}

export type TTransaction = TOperation & {
    type: TypeEvents.Balance,
    balance: string,
}

export type TNotification = TOperation & {
    type: TypeEvents.Notification,
    service: string,
}

export enum TypeEvents {
    Balance = 'Balance',
    Notification = 'Notification'
}