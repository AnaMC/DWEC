create database playList
  default character set utf8
  collate utf8_general_ci;
  
create user usuariobd@localhost
  identified by 'clavebd';

grant all
  on nombrebd.*
  to usuariobd@localhost;

flush privileges;

create table cancion (
    id bigint not null auto_increment primary key,
    titulo varchar(50) not null,
    interprete varchar(50) not null,
    genero varchar(30) not null
) engine = innodb
  character set utf8
  collate utf8_general_ci;