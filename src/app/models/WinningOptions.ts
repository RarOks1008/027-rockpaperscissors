export const WinningOptions = {
    rock: {
        winning: ['scissors'],
        losing: ['paper']
    },
    paper: {
        winning: ['rock'],
        losing: ['scissors']
    },
    scissors: {
        winning: ['paper'],
        losing: ['rock']
    }
};

export const WinningOptionsExtended = {
    rock: {
        winning: ['scissors', 'lizard'],
        losing: ['paper', 'spock']
    },
    paper: {
        winning: ['rock', 'spock'],
        losing: ['scissors', 'lizard']
    },
    scissors: {
        winning: ['paper', 'lizard'],
        losing: ['rock', 'spock']
    },
    lizard: {
        winning: ['paper', 'spock'],
        losing: ['rock', 'scissors']
    },
    spock: {
        winning: ['rock', 'scissors'],
        losing: ['paper', 'lizard']
    }
};