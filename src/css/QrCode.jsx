import { useState } from "react"

export const QrCode = ()=>{

    const [img, setImg] = useState()
    const [loading ,setloading] = useState(false)
    const [qrdata , setqrdata]=useState("https://youtube.com/")
    const [qrsize, setqrsize]=useState("150")


    async function generate(){
        setloading(true);

        try {
            const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
            setImg(url);
        } catch (error){
        }
        finally{
                setloading(false)
            }
        
        }
    function download(){
            fetch(img)
            .then((response)=>response.blob())
            .then((blob)=>{
                const link=document.createElement("a");
                link.href=URL.createObjectURL(blob);
                link.download="QR code.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link)
            })
            .catch((error)=>{
            console.error("Error downloading QR code: ", error)
        })
        }

    return(
        <div className="app-container">
            <h1 className="title">QR code Generator</h1>
            {loading && <p>Please Wait...</p>}
            {img && <img src={img} className="img" alt="" />}
            <div className="sub-container">
                <label htmlFor="Inputdata" className="Input-label">
                    Data for QR Code:
                </label>
                <input type="text" id="Inputdata" value={qrdata} placeholder="Enter data fot QR code" 
                onChange={(e)=>setqrdata(e.target.value)}/>

                <label htmlFor="sizeinput"  className="Input-label">
                    Image Size (eg:150):
                </label>
                <input type="text" id="sizeinput" value={qrsize}  placeholder="Enter image size" 
                onChange={(e)=>setqrsize(e.target.value)}/>
                <button className="generate" onClick={generate} disabled={loading}>Generate QR code</button>
                <button className="download" onClick={download}>Download QR code</button>
            </div>

        </div>
    )
}

