const mahasiswa={template:`
<div>

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
 Add Mahasiswa
</button>

<table class="table table-striped">
<thead>
    <tr>
        <th>
            NIM
        </th>
        <th>
            Nama
        </th>
        <th>
            Program Studi
        </th>
        <th>
            Fakultas
        </th>
        <th>
            Nomor HP
        </th>
        <th>
            Options
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="mhs in mahasiswas">
        <td>{{mhs.MahasiswaId}}</td>
        <td>{{mhs.MahasiswaNama}}</td>
        <td>{{mhs.MahasiswaProdi}}</td>
        <td>{{mhs.MahasiswaFakultas}}</td>
        <td>{{mhs.MahasiswaHP}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(mhs)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button" @click="deleteClick(mhs.MahasiswaId)"
            class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

        </td>
    </tr>
</tbody>
</thead>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>

    <div class="modal-body">

        <div class="input-group mb-3">
            <span class="input-group-text">NIM</span>
            <input type="text" class="form-control" v-model="MahasiswaNIM">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Nama</span>
            <input type="text" class="form-control" v-model="MahasiswaNama">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Prodi</span>
            <input type="text" class="form-control" v-model="MahasiswaProdi">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Fakultas</span>
            <input type="text" class="form-control" v-model="MahasiswaFakultas">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Nomor HP</span>
            <input type="text" class="form-control" v-model="MahasiswaHP">
        </div>

        <button type="button" @click="createClick()"
        v-if="MahasiswaId==0" class="btn btn-primary">
        Create
        </button>
        <button type="button" @click="updateClick()"
        v-if="MahasiswaId!=0" class="btn btn-primary">
        Update
        </button>

    </div>

</div>
</div>
</div>


</div>


`,

data(){
    return{
        mahasiswas:[],
        modalTitle:"",
        MahasiswaNIM:"",
        MahasiswaNama:"",
        MahasiswaProdi:"",
        MahasiswaFakultas:"",
        MahasiswaHP:"",
        MahasiswaId:0,
        MahasiswaNamaFilter:"",
        MahasiswaIdFilter:"",
        mahasiswasWithoutFilter:[]
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"getDataMhs",{
            headers: {
                Authorization: 'Basic' + 'QWRtaW5pc3RyYXRvcjptYW5hZ2U=',
             }
        })
        .then((response)=>{
            this.mahasiswas=response.data;
            this.mahasiswasWithoutFilter=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add Mahasiswa";
        this.MahasiswaId=0;
        this.MahasiswaNIM="";
        this.MahasiswaNama="";
        this.MahasiswaProdi="";
        this.MahasiswaFakultas="";
        this.MahasiswaHP="";
    },
    editClick(mhs){
        this.modalTitle="Edit Mahasiswa";
        this.MahasiswaId=mhs.MahasiswaId;
        this.MahasiswaNIM=mhs.MahasiswaNIM;
        this.MahasiswaNama=mhs.MahasiswaNama;
        this.MahasiswaProdi=mhs.MahasiswaProdi;
        this.MahasiswaFakultas=mhs.MahasiswaFakultas;
        this.MahasiswaHP=mhs.MahasiswaHP;
    },
    createClick(){
        axios.post(variables.API_URL+"insertDataMhs",{
            headers: {
                Authorization: 'Basic' + 'QWRtaW5pc3RyYXRvcjptYW5hZ2U=',
             }
        },
        {
            MahasiswaNIM:this.MahasiswaNIM,
            MahasiswaNama:this.MahasiswaNama,
            MahasiswaProdi:this.MahasiswaProdi,
            MahasiswaFakultas:this.MahasiswaFakultas,
            MahasiswaHP:this.MahasiswaHP
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL+"mahasiswa",{
            MahasiswaId:this.MahasiswaId,
            MahasiswaNIM:this.MahasiswaNIM,
            MahasiswaNama:this.MahasiswaNama,
            MahasiswaProdi:this.MahasiswaProdi,
            MahasiswaFakultas:this.MahasiswaFakultas,
            MahasiswaHP:this.MahasiswaHP
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"mahasiswa/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

    },
    FilterFn(){
        var MahasiswaIdFilter=this.MahasiswaIdFilter;
        var MahasiswaNamaFilter=this.MahasiswaNamaFilter;

        this.mahasiswas=this.mahasiswasWithoutFilter.filter(
            function(el){
                return el.MahasiswaId.toString().toLowerCase().includes(
                    MahasiswaIdFilter.toString().trim().toLowerCase()
                )&&
                el.MahasiswaNama.toString().toLowerCase().includes(
                    MahasiswaNamaFilter.toString().trim().toLowerCase()
                )
            });
    },
    sortResult(prop,asc){
        this.mahasiswas=this.mahasiswasWithoutFilter.sort(function(a,b){
            if(asc){
                return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
            }
            else{
                return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
            }
        })
    }

},
mounted:function(){
    this.refreshData();
}

}