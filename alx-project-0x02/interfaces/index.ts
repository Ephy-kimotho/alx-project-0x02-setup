export interface CardProps {
    title: string,
    content: string
}

export interface PostModalProps {
    openModal: boolean,
    setOpenModal: (value: boolean) => void,
    addCard: (title: string, content: string) => void
}

export interface ButtonProps {
    children: string,
    size: "small" | "medium" | "large",
    shape: "rounded-sm" | "rounded-md" | "rounded-full"
}

export interface PostProps {
    title: string,
    content: string,
    userId: number
}

export interface UserProps {
    name: string,
    email: string,
    address: {
        street: string,
        zipcode: string,
        city: string
    }
}