export const scaleAnimations = {
    initial: {
        scale: 0,
        opacity: 0,
    },
    animate: {
        scale: 1,
        opacity: 1
    },
    transition: {
        duration: 0.5,
        ease: "easeInOut"
    }
}

export const notificationsAnimations = {
    initial: {
        translateY: -60
    },
    animate: {
        translateY: 0
    },
    exit: {
        translateY: -60,
    },
    transition: {
        duration: 0.5,
        ease: "easeInOut"
    }
}