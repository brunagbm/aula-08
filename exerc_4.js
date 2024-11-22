function podeAcessar(usuario) {
    return (usuario.idade > 18 || usuario.isAdmin) && !usuario.isBlocked;
}

console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false }))
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true }))
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: false }))
console.log(podeAcessar({ idade: 17, isAdmin: false, isBlocked: false }))