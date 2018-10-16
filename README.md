git clone https://github.com/datauy/privacidad.git
Crear archivo de configuración
A realizar example
Debe tener las variables de configuración de acceso con FB:
$conf['facebook_app_id']
$conf['facebook_app_secret']
Generar pass para admin: ./scripts/password-hash.sh Admin4321
Crear base de datos
Cargar dump file
Cargar usuario admin en base de datos
INSERT INTO `users` (`uid`, `name`, `pass`, `mail`, `theme`, `signature`, `signature_format`, `created`, `access`, `login`, `status`, `timezone`, `language`, `picture`, `init`, `data`) VALUES ('1', 'admin', '$S$DbTipN3zN8rMXMeA657CAXC2fDf0qz3jIPRvpPJeRLoG1gHmMEhS', 'fernando@localhost', '', '', NULL, '0', '0', '0', '0', NULL, '', '0', 'admin', NULL);
INSERT INTO `users_roles` (`uid`, `rid`) VALUES ('2', '3');
 Login
admin/config/search/clean-urls
admin/config/search/path
