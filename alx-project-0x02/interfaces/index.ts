export interface CardProps {
    title: string,
    content: string
}

export interface PostModalProps {
    openModal: boolean,
    setOpenModal: (value: boolean) => void,
    addCard: (title: string, content: string) => void
}