drop table if exists example;




create table example(
    id integer primary key autoincrement,
    name text not null,
    content not null
);