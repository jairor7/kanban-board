import { push, get, ref, set } from "firebase/database";
import { db } from "../firebase/firebase";

const add = (task, uid) => push(ref(db, `kanban/${uid}/`), task);

const getTask = (uid) => get(ref(db, `kanban/${uid}/`));

const updateTask = (task, uid, id) => set(ref(db, `kanban/${uid}/${id}`), task);

const removeTask = (uid, id) => set(ref(db, `kanban/${uid}/${id}`), null);

export { add, getTask, updateTask, removeTask };
