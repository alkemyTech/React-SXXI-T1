import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function CKEditorComponent({id, setDescription, setDescError}) {
    return (
        <div>
            <CKEditor
                editor={ ClassicEditor }
                data={ id ? "<p>Esta es la descripcion del testimonio</p>" : "<p>Descripción</p>"}
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    setDescription(data);
                    setDescError(()=>{ if(data==='') return 'Campo obligatorio'});
                } }
            />
        </div>
    );
}