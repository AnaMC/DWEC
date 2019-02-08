create database playList
  default character set utf8
  collate utf8_general_ci;
  
create user playlist@localhost
  identified by 'clavebd';

grant allon playList.* to playlist@localhost;

flush privileges;

use playList;

create table cancion (
    titulo varchar(50) not null,  -- Unique    \__ no hay dos titulos iguales con el mismo intérprete
    interprete varchar(50) not null, --Unique  /
    genero varchar(30) not null
) engine = innodb
  character set utf8
  collate utf8_general_ci;